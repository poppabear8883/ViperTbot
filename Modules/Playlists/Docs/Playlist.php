<?php

namespace Modules\Playlists\Docs;

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
     * @SWG\Property(example="Rock N Roll")
     * @var string
     */
    public $name;

    /**
     * @SWG\Property()
     * @var object
     */
    public $user;

    /**
     * @SWG\Property()
     * @var array
     */
    public $songs;
}