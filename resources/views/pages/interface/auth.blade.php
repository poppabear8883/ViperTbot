@extends('layouts.interface.interface')

@section('content')
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="lockscreen animated flipInY">
                <div class="logo">
                    <h1 class="semi-bold">ViperTwitchBot v1.0 Beta</h1>
                </div>

                <div>
                    <a href="/authenticate" class="btn btn-primary">
                        <i class="fa fa-twitch"></i> Connect to Twitch
                    </a>
                </div>


                <p class="font-xs margin-top-5">
                    Copyright ViperTwitchBot 2017.

                </p>
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
@endsection