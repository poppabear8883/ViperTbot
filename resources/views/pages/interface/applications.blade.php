@extends('layouts.interface.interface')

@section('page-title')
    <i class="fa-fw fa fa-cubes"></i>
    Applications <span>&gt; My Applications</span>
@endsection

@section('content')
    <section id="widget-grid">

        <!-- row -->
        <div class="row">

            <!-- SINGLE GRID -->
            <article class="col-md-8">

                <passport-clients></passport-clients>

                <passport-personal-access-tokens></passport-personal-access-tokens>

            </article><!-- END GRID -->

            <!-- SINGLE GRID -->
            <article class="col-md-4">
                <passport-authorized-clients></passport-authorized-clients>
            </article><!-- END GRID -->

        </div><!-- end row -->

    </section><!-- end widget grid -->
@endsection