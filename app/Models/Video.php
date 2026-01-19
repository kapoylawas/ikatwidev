<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'status',
        'tahun',
        'filevideo',
        'linkvideo'
    ];

    protected function filevideo(): Attribute
    {
        return Attribute::make(
            get: fn ($filevideo) => $filevideo ? asset('/storage/videos/' . $filevideo) : null,
        );
    }

    /**
     * Accessor untuk embed URL YouTube
     */
    protected function embedUrl(): Attribute
    {
        return Attribute::make(
            get: function () {
                $url = $this->linkvideo;
                
                if (!$url) return null;
                
                // Jika link berupa youtu.be
                if (str_contains($url, 'youtu.be')) {
                    $id = substr(parse_url($url, PHP_URL_PATH), 1);
                    return 'https://www.youtube.com/embed/' . $id;
                }
                
                // Jika link berupa youtube.com/watch?v=
                if (str_contains($url, 'youtube.com/watch')) {
                    parse_str(parse_url($url, PHP_URL_QUERY), $params);
                    if (isset($params['v'])) {
                        return 'https://www.youtube.com/embed/' . $params['v'];
                    }
                }
                
                // Jika sudah embed URL
                if (str_contains($url, 'youtube.com/embed')) {
                    return $url;
                }
                
                return null;
            }
        );
    }

    /**
     * Accessor untuk thumbnail YouTube
     */
    protected function thumbnail(): Attribute
    {
        return Attribute::make(
            get: function () {
                $url = $this->linkvideo;
                if (!$url) return null;
                
                $youtubeId = null;
                
                // Ekstrak ID YouTube dari berbagai format
                if (str_contains($url, 'youtu.be')) {
                    $youtubeId = substr(parse_url($url, PHP_URL_PATH), 1);
                } elseif (str_contains($url, 'youtube.com/watch')) {
                    parse_str(parse_url($url, PHP_URL_QUERY), $params);
                    $youtubeId = $params['v'] ?? null;
                } elseif (str_contains($url, 'youtube.com/embed')) {
                    $path = parse_url($url, PHP_URL_PATH);
                    $youtubeId = basename($path);
                }
                
                if ($youtubeId) {
                    return 'https://img.youtube.com/vi/' . $youtubeId . '/hqdefault.jpg';
                }
                
                return null;
            }
        );
    }

    /**
     * Accessor untuk ID YouTube
     */
    protected function youtubeId(): Attribute
    {
        return Attribute::make(
            get: function () {
                $url = $this->linkvideo;
                if (!$url) return null;
                
                if (str_contains($url, 'youtu.be')) {
                    return substr(parse_url($url, PHP_URL_PATH), 1);
                }
                
                if (str_contains($url, 'youtube.com/watch')) {
                    parse_str(parse_url($url, PHP_URL_QUERY), $params);
                    return $params['v'] ?? null;
                }
                
                if (str_contains($url, 'youtube.com/embed')) {
                    $path = parse_url($url, PHP_URL_PATH);
                    return basename($path);
                }
                
                return null;
            }
        );
    }
}