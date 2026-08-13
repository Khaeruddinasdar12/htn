<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class SpaController extends Controller
{
    public function index(Request $request): View
    {
        return view('app', [
            'og' => $this->openGraph($request->path()),
        ]);
    }

    /**
     * @return array{title: string, description: string, image: string, url: string, type: string, image_type: string, image_width: int, image_height: int}
     */
    private function openGraph(string $path): array
    {
        $defaults = [
            'title' => 'Program Studi Hukum Tata Negara - FSHI IAIN Bone',
            'description' => 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone',
            'image' => asset('logoiainbone.png'),
            'url' => url()->current(),
            'type' => 'website',
            'image_type' => 'image/png',
            'image_width' => 1200,
            'image_height' => 630,
        ];

        if (! preg_match('#^news/([^/]+)$#', $path, $matches)) {
            return $defaults;
        }

        $news = News::query()->where('slug', $matches[1])->first();

        if (! $news) {
            return $defaults;
        }

        $image = $this->newsImageUrl($news->image);

        return [
            'title' => $news->title,
            'description' => $this->excerpt($news->content),
            'image' => $image['url'],
            'url' => url('/news/'.$news->slug),
            'type' => 'article',
            'image_type' => $image['type'],
            'image_width' => 1200,
            'image_height' => 630,
        ];
    }

    /**
     * @return array{url: string, type: string}
     */
    private function newsImageUrl(?string $image): array
    {
        if (blank($image)) {
            return [
                'url' => asset('logoiainbone.png'),
                'type' => 'image/png',
            ];
        }

        if (str_starts_with($image, 'http://') || str_starts_with($image, 'https://')) {
            $url = $image;
        } else {
            $url = asset('storage/'.ltrim($image, '/'));
        }

        $extension = strtolower(pathinfo(parse_url($url, PHP_URL_PATH) ?: $image, PATHINFO_EXTENSION));

        $type = match ($extension) {
            'png' => 'image/png',
            'gif' => 'image/gif',
            'webp' => 'image/webp',
            default => 'image/jpeg',
        };

        return [
            'url' => $url,
            'type' => $type,
        ];
    }

    private function excerpt(?string $content): string
    {
        $text = trim(preg_replace('/\s+/', ' ', strip_tags((string) $content)) ?? '');

        if ($text === '') {
            return 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone';
        }

        return Str::limit($text, 160);
    }
}
