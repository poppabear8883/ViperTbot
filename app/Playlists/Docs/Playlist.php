<?php

namespace App\Playlists\Docs\Api;

/**
 * @SWG\Definition(
 *   required={"user_id", "name"},
 *   type="object",
 *   @SWG\Xml(name="Playlist")
 * )
 */
class Playlist
{
    /**
     * @SWG\Property(format="int64", example="1")
     * @var int
     */
    public $id;

    /**
     * @SWG\Property(format="int64", example="1")
     * @var int
     */
    public $user_id;

    /**
     * @SWG\Property(example="Rock N Roll")
     * @var string
     */
    public $name;

    /**
     * @SWG\Property(example="2017-10-08 02:51:35")
     * @var string
     */
    public $created_at;

    /**
     * @SWG\Property(example="2017-10-08 02:51:35")
     * @var string
     */
    public $updated_at;

}