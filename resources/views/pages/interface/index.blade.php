@extends('layouts.interface.interface')

@section('content')
    <div class="row">
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
            <h1 class="page-title txt-color-blueDark">
                <i class="fa-fw fa fa-home"></i>
                Dashboard <span>&gt; My Dashboard</span>
            </h1>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">
            <ul id="sparks" class="">
                <li class="sparks-info">
                    <h5> Followers
                        <span class="txt-color-blue">
                            @if(isset($followers->error))
                                0
                            @else
                                {{ $followers['_total'] }}
                            @endif
                        </span>
                    </h5>
                </li>
                <li class="sparks-info">
                    <h5> Subscribers
                        <span class="txt-color-greenDark">
                            @if(isset($subscribers->error))
                                0
                            @else
                                {{ $subscribers['_total'] }}
                            @endif
                        </span>
                    </h5>
                </li>
            </ul>
        </div>
    </div>

    <section id="widget-grid">

        <!-- row -->
        <div class="row">

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <twitch-chat-widget username="{{Auth::user()->username}}"></twitch-chat-widget>

                {{--<twitch-events-widget--}}
                        {{--token="{{Auth::user()->access_token}}"--}}
                        {{--channel-id="{{Auth::user()->channel_id}}"--}}
                {{--></twitch-events-widget>--}}

            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <media-player-widget></media-player-widget>

                <div class="jarviswidget" id="wid-id-5">

                    <header>
                        <h2>Widget Title</h2>
                    </header><!-- widget div-->

                    <div>
                        <!-- widget edit box -->
                        <div class="jarviswidget-editbox">
                            <!-- This area used as dropdown edit box -->
                            <input class="form-control" type="text">
                        </div><!-- end widget edit box -->

                        <!-- widget content -->
                        <div class="widget-body">

                            [PLACE WIDGET CONTENTS HERE]

                        </div><!-- end widget content -->
                    </div><!-- end widget div -->
                </div><!-- end widget -->

                <div class="jarviswidget" id="wid-id-6">

                    <header>
                        <h2>Widget Title</h2>
                    </header><!-- widget div-->

                    <div>
                        <!-- widget edit box -->
                        <div class="jarviswidget-editbox">
                            <!-- This area used as dropdown edit box -->
                            <input class="form-control" type="text">
                        </div><!-- end widget edit box -->

                        <!-- widget content -->
                        <div class="widget-body">

                            [PLACE WIDGET CONTENTS HERE]

                        </div><!-- end widget content -->
                    </div><!-- end widget div -->
                </div><!-- end widget -->

            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection
