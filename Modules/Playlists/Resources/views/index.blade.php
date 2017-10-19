@extends('layouts.interface.interface')

@section('content')
    <playlists v-if="user.id"></playlists>
@stop
