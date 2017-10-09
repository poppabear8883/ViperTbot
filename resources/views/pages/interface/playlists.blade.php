@extends('layouts.interface.interface')

@section('content')
    <section id="widget-grid">

        <!-- row -->
        <div class="row">
            <article class="col-sm-12">
                <youtube-search-widget></youtube-search-widget>
            </article>

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">
                <playlist-widget max-height="400px"></playlist-widget>
            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6 sortable-grid ui-sortable">
                <media-player-widget></media-player-widget>
            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection