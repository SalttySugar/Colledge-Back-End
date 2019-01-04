<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if(!\Illuminate\Support\Facades\Auth::user())
        {
            return redirect('login');
        }

        if(\Illuminate\Support\Facades\Auth::user()->role_id != 1)
        {
            return redirect('login');
        }

        return $next($request);
    }
}
