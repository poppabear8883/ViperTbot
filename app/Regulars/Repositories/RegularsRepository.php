<?php

namespace App\Regulars\Repositories;

use App\Regulars\Contracts\RegularsInterface;
use App\Regulars\Regular;

class RegularsRepository implements RegularsInterface
{

    /**
     * @var Regular
     */
    private $model;

    public function __construct(Regular $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->all();
    }
}