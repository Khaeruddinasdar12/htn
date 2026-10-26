<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3) // Menggunakan 3 kolom untuk tata letak yang lebih baik
            ->components([
                // Kolom Judul: Live untuk menghasilkan slug
                TextInput::make('title')
                ->label('Judul Berita')
                ->required()
                ->maxLength(255)
                    // Membuat input "live" untuk memicu pembaruan pada field lain saat nilai berubah
                ->live(onBlur: true)
                    // Perbaikan TypeError: Menghapus type hint 'Set' dari $set
                    // dan menggunakan ?string untuk $state agar lebih aman.
                ->afterStateUpdated(function (string $operation, ?string $state, $set) {
                        // Hanya mengisi otomatis saat membuat (create) record baru
                    if ($operation === 'create') {
                        $set('slug', Str::slug($state ?? ''));
                    }
                })
                    ->columnSpan(2), // Judul mengambil 2 kolom

                // Kolom Slug: Otomatis terisi, dinonaktifkan, dan harus unik
                    TextInput::make('slug')
                    ->label('Slug (Alamat URL)')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true) // Pastikan slug unik (abaikan record saat edit)
                    ->disabled() // Nonaktifkan agar pengguna tidak bisa mengedit
                    ->dehydrated(fn (?string $state): bool => filled($state)) // Pastikan data tersimpan meskipun disabled
                    ->columnSpan(1), // Slug mengambil 1 kolom

                // Isi berita diletakkan di atas thumbnail agar overlay FilePond
                // tidak menutupi area ketik TipTap.
                RichEditor::make('content')
                    ->label('Isi Berita')
                    ->required()
                    ->placeholder('Tulis isi berita di sini...')
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsDirectory('news/attachments')
                    ->columnSpanFull()
                    ->extraAttributes([
                        'style' => 'position: relative; z-index: 1;',
                    ])
                    ->extraInputAttributes([
                        'style' => 'min-height: 400px;',
                    ]),

                FileUpload::make('image')
                    ->label('Thumbnail')
                    ->disk('public')
                    ->directory('news/files')
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg'])
                    ->maxSize(10240)
                    ->extraAttributes([
                        'style' => 'overflow: hidden; position: relative; z-index: 0;',
                    ])
                    ->columnSpanFull(),

                Select::make('user_id')
                    ->label('Dibuat oleh')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->default(fn () => Auth::id())
                    ->required()
                    ->visible(fn (): bool => Auth::user()?->isAdmin() ?? false)
                    ->dehydrated(fn (): bool => Auth::user()?->isAdmin() ?? false)
                    ->helperText('Hanya admin yang dapat mengubah penulis berita.')
                    ->columnSpanFull(),

                DateTimePicker::make('created_at')
                    ->label('Waktu Dibuat')
                    ->required()
                    ->placeholder(now()->format('Y-m-d H:i:s')),



                ]);
        }
    }
