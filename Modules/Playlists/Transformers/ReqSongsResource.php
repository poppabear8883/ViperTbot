<?php

namespace Modules\Playlists\Transformers;

use Illuminate\Http\Resources\Json\Resource;

class ReqSongsResource extends Resource
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
            'title' => $this->title,
            'video_id' => $this->video_id,
            'requested_by' => $this->requested_by,
        ];
    }

    public function with($request)
    {
        return [
            'user' => $this->user
        ];
    }
}
