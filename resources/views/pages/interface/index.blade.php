@extends('layouts.interface.interface')

@section('page-title')
    <i class="fa-fw fa fa-home"></i>
    Dashboard <span>&gt; My Dashboard</span>
@endsection
@section('content')
    <dashboard v-if="user.id"></dashboard>
@endsection
