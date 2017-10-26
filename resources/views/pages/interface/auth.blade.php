@extends('layouts.login')

@section('content')
    <div class="lockscreen animated flipInY">
        <div class="logo">
            <h1 class="semi-bold"><img src="img/logo-o.png" alt="" /> Viper Twitch Bot</h1>
        </div>
        <div>
            <img src="img/avatars/sunny-big.png" alt="" width="120" height="120" />
            <div>
                <h1>
                    <i class="fa fa-twitch fa-3x text-muted air air-top-right hidden-mobile"></i>
                    <small><i class="fa fa-lock text-muted"></i> &nbsp;Locked</small>
                </h1>

                <div class="input-group">
                    <div class="input-group-btn">
                        <a href="/authenticate" class="btn btn-primary">
                            <i class="fa fa-twitch"></i> Connect to Twitch
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <p class="font-xs margin-top-5">
            Copyright Viper Twitch Bot 2016-2018.
        </p>
    </div>
@endsection