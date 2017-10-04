<?php namespace App\Traits;

use Illuminate\Http\Request;
use Validator;

trait HandlesApiRequests {

    protected $request_methods = [
        'GET', 'POST', 'PUT', 'PATCH', 'DELETE'
    ];

    protected $functions = [
        'all', 'create', 'update', 'remove',
        'myChannel', 'updateChannel', 'getAuthUser'
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

        if (!$this->valid_method($method)) {
            array_push($this->errors, 'Method not allowed. Refer to the Api documentation for a list of available request methods');
            return false;
        }

        if ($method !== 'GET') {
            $this->validate($request, [
                'action' => 'required',
                'params' => 'array'
            ]);
        } else {
            $this->validate($request, [
                'action' => 'required'
            ]);
        }

        $func = $request->input('action');

        if (!$this->valid_function($func))
            return false;

        return true;
    }

    protected function valid_method($method)
    {
        return in_array($method, $this->request_methods);
    }

    protected function valid_function($func)
    {
        if (in_array($func, $this->functions)) {
            if (!method_exists($this, $func)) {
                array_push($this->errors, '\'' . $func . '\' is invalid. Refer to the Api documentation for a list of available actions');
                return false;
            }
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

    /**
     * Checks the validation rules for the request
     *
     * @param array $params
     * @return Response|bool
     */
    protected function isValid($params)
    {
        $validator = Validator::make($params, $this->rules);

        if ($validator->fails()) {
            return response(['errors' => $validator->failed()], 422);
        }

        return true;
    }
}