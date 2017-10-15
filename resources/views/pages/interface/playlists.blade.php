@extends('layouts.interface.interface')

@section('content')
    <section id="widget-grid">

        <!-- row -->
        <div class="row">

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">
                <youtube-search-widget></youtube-search-widget>
                <playlist-widget max-height="400px"></playlist-widget>
            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">
                <media-player-widget :playlists="{{\Auth::user()->playlists()->with('songs')->get()}}"></media-player-widget>
                <requested-songs-widget></requested-songs-widget>
            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection