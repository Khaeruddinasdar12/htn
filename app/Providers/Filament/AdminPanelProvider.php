<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\View\PanelsRenderHook;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
                FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->renderHook(
                PanelsRenderHook::HEAD_END,
                function (): string {
                    $src = \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('rich-editor', 'filament/forms');
                    $path = parse_url($src, PHP_URL_PATH) ?: '/js/filament/forms/components/rich-editor.js';
                    $query = parse_url($src, PHP_URL_QUERY);
                    $href = e($path.($query ? '?'.$query : ''));

                    return <<<HTML
                        <link rel="modulepreload" href="{$href}">
                        <style>
                            .fi-fo-rich-editor .fi-fo-rich-editor-content,
                            .fi-fo-rich-editor .tiptap {
                                min-height: inherit;
                                height: 100%;
                                cursor: text;
                            }
                        </style>
                    HTML;
                },
            )
            ->renderHook(
                PanelsRenderHook::SCRIPTS_BEFORE,
                fn (): string => <<<'HTML'
                    <script>
                        document.querySelectorAll('[x-load-src]').forEach((el) => {
                            const src = el.getAttribute('x-load-src')
                            if (!src) return

                            try {
                                const url = new URL(src, window.location.origin)
                                el.setAttribute('x-load-src', url.pathname + url.search)
                            } catch (e) {}

                            const strategy = el.getAttribute('x-load')
                            if (strategy === null || strategy === '' || strategy === 'true') {
                                el.setAttribute('x-load', 'eager')
                            }
                        })
                    </script>
                HTML,
            );
    }
}
