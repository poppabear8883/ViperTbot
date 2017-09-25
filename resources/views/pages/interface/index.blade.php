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
                            @{{ channel.followers }}
                        </span>
                    </h5>
                </li>
                <li class="sparks-info">
                    <h5> Views
                        <span class="txt-color-magenta">
                            @{{ channel.views }}
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

                <stream-setup-widget
                        client-id="{{env('TWITCH_KEY')}}"
                ></stream-setup-widget>

                <twitch-chat-widget></twitch-chat-widget>


            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <media-player-widget></media-player-widget>

                <twitch-events-widget
                        channel-id="{{Auth::user()->channel_id}}"
                        token="{{Auth::user()->access_token}}"
                ></twitch-events-widget>

            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection
