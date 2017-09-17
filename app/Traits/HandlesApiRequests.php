<?php

namespace App\Traits;
use Illuminate\Http\Request;

trait HandlesApiRequests {

    protected $request_methods = [
        'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
    ];

    protected $errors = [];

    /**
     * Entry point for local API requests
     *
     * @param Request $request
     * @return response
     */
    public function api(Request $request)
    {
        if (!$this->valid_request($request))
            return response(['errors' => $this->errors], 400);

        $func = $request->input('action');
        $params = $request->input('params', []);

        return $this->$func($params);
    }

    protected function valid_request($request)
    {
        $method = strtoupper($request->method());

        if (in_array($method, $this->request_methods)) {
            $this->validate($request, [
                'action' => 'required',
                'params' => 'array'
            ]);

            $func = $request->input('action');

            if (!$this->valid_function($func, $method))
                return false;

        } else {
            array_push($this->errors, 'Method not allowed. Refer to the Api documentation for a list of available request methods');
            return false;
        }

        return true;
    }

    protected function valid_function($func, $type)
    {
        $type = strtolower($type);
        $types = $this->{$type . '_methods'};

        if (in_array($func, $types)) {
            if (!method_exists($this, $func)) {
                array_push($this->errors, '\'' . $func . '\' is invalid. Refer to the Api documentation for a list of available actions');
                return false;
            }
        } else {
            $type = strtoupper($type);
            array_push($this->errors, '\'' . $func . '\' is invalid for ' . $type . ' requests. Refer to the Api documentation for a list of available ' . $type . ' actions');
            return false;
        }

        return true;
    }

    protected function param_has($params, $keys)
    {
        if (is_array($keys)) {
            // $keys = Array
            foreach ($keys as $value) {
                if (!array_has($params, $value)) {
                    array_push($this->errors, '\'' . $value . '\' parameter is required!');
                } elseif(!$params[$value]) {
                    array_push($this->errors, '\'' . $value . '\' parameter value is null!');
                }
            }
        } else {
            // $keys = String
            if (!array_has($params, $keys)) {
                array_push($this->errors, '\'' . $keys . '\' parameter is required!');
            } elseif(!$params[$keys]) {
                array_push($this->errors, '\'' . $keys . '\' parameter value is null!');
            }
        }

        if (!empty($this->errors)) {
            return false;
        }

        return true;
    }

    protected function param_is_alpha($params, $key)
    {
        if (!ctype_alpha($params[$key])) {
            array_push($this->errors, '\'' . $key . '\' parameter should contain Alpha characters only!');
            return false;
        }

        return true;
    }
}