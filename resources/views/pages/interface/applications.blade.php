@extends('layouts.interface.interface')

@section('content')
    <section id="widget-grid">

        <!-- row -->
        <div class="row">

            <!-- SINGLE GRID -->
            <article class="col-sm-6">

                <passport-clients></passport-clients>

                <passport-personal-access-tokens></passport-personal-access-tokens>

            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-sm-6">
                <passport-authorized-clients></passport-authorized-clients>
            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection