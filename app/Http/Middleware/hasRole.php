<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class hasRole
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param $roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $roles)
    {
        $roles = explode('|', $roles);
        abort_unless($request->user()->hasRole($roles), 403);

        return $next($request);
    }
}
