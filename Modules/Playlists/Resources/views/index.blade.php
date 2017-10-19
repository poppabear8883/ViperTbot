@extends('layouts.interface.interface')

@section('page-title')
    <i class="fa-fw fa fa-music"></i>
    Playlists <span>&gt; Manage</span>
@endsection
@section('content')
    <playlists v-if="user.id"></playlists>
@stop
