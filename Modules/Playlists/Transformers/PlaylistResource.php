<?php

namespace Modules\Playlists\Transformers;

use Illuminate\Http\Resources\Json\Resource;

class PlaylistResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user' => $this->user,
            'songs' => $this->songs
        ];
    }
}
