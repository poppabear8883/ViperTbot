@extends('layouts.interface.interface')

@section('content')
    <section id="widget-grid">

        <!-- row -->
        <div class="row">

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <stream-setup-widget
                        client-id="{{env('TWITCH_KEY')}}"
                ></stream-setup-widget>

                {{--<twitch-chat-widget></twitch-chat-widget>--}}


            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">

                <media-player-widget
                        :playlists="{{$playlists}}"
                        :reqplaylist="{{$requested_songs}}"
                ></media-player-widget>

                <playlist-widget></playlist-widget>

            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection
