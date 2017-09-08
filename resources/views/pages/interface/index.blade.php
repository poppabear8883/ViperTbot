<!doctype html>
<html lang="{{ app()->getLocale() }}">

@include('pages.interface.partials.headmeta')

<body class="fixed-header fixed-page-footer smart-style-1 minified">

<div id="app">

    {{-- Header --}}
    @include('pages.interface.partials.header')

    {{-- Main Navigation --}}
    @include('pages.interface.partials.nav')

    {{-- Main Panel --}}
    <div id="main" role="main">

        {{-- Ribbon (Breadcrumbs) --}}
        @include('pages.interface.partials.ribbon')

        {{-- Main Content --}}
        <div id="content">

            <div class="row">
                <div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                    <h1 class="page-title txt-color-blueDark"><i class="fa-fw fa fa-home"></i> Dashboard <span>&gt; My Dashboard</span></h1>
                </div>
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                    <ul id="sparks" class="">
                        <li class="sparks-info">
                            <h5> Followers <span class="txt-color-blue">504</span></h5>
                            <div class="sparkline txt-color-blue hidden-mobile hidden-md hidden-sm"><canvas width="89" height="26" style="display: inline-block; width: 89px; height: 26px; vertical-align: top;"></canvas></div>
                        </li>
                        <li class="sparks-info">
                            <h5> Donations <span class="txt-color-purple"><i class="fa fa-arrow-circle-up"></i> $489.87</span></h5>
                            <div class="sparkline txt-color-purple hidden-mobile hidden-md hidden-sm"><canvas width="82" height="26" style="display: inline-block; width: 82px; height: 26px; vertical-align: top;"></canvas></div>
                        </li>
                        <li class="sparks-info">
                            <h5> Subscribers <span class="txt-color-greenDark"><i class="fa fa-shopping-cart"></i> 30</span></h5>
                            <div class="sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm"><canvas width="82" height="26" style="display: inline-block; width: 82px; height: 26px; vertical-align: top;"></canvas></div>
                        </li>
                    </ul>
                </div>
            </div>

            <section id="widget-grid">

                <!-- row -->
                <div class="row">

                    <!-- SINGLE GRID -->
                    <article class="col-sm-6 sortable-grid ui-sortable">

                        <!-- Widget ID (each widget will need unique ID)-->
                        <div class="jarviswidget" id="wid-id-0">
                            <!-- widget options:
                                usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">

                                data-widget-colorbutton="false"
                                data-widget-editbutton="false"
                                data-widget-togglebutton="false"
                                data-widget-deletebutton="false"
                                data-widget-fullscreenbutton="false"
                                data-widget-custombutton="false"
                                data-widget-collapsed="true"
                                data-widget-sortable="false"

                            -->
                            <header>
                                <h2><strong>Default</strong> <i>Widget</i></h2>

                            </header>

                            <!-- widget div-->
                            <div>

                                <!-- widget edit box -->
                                <div class="jarviswidget-editbox">
                                    <!-- This area used as dropdown edit box -->
                                    <input class="form-control" type="text">
                                    <span class="note"><i class="fa fa-check text-success"></i> Change title to update and save instantly!</span>

                                </div>
                                <!-- end widget edit box -->

                                <!-- widget content -->
                                <div class="widget-body">

                                    <p> Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
                                        to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
                                        corner of the widget header. </p>
                                    <a href="javascript:void(0);" class="btn btn-default btn-lg"> <strong>Big</strong> <i>Button</i> </a>

                                </div>
                                <!-- end widget content -->

                            </div>
                            <!-- end widget div -->

                        </div>
                        <!-- end widget -->

                        <div class="jarviswidget" id="wid-id-2">

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

                        <div class="jarviswidget" id="wid-id-3">

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

                    <!-- SINGLE GRID -->
                    <article class="col-sm-6 sortable-grid ui-sortable">

                        <div class="jarviswidget" id="wid-id-4">

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

        </div>
        {{-- End Main Content --}}

    </div>
    {{-- End Main Panel --}}

    @include('pages.interface.partials.footer')
    @include('pages.interface.partials.shortcuts')
</div>
{{-- END #APP --}}

<!--[if IE 8]>
<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>
<![endif]-->

@include('pages.interface.partials.javascript')

<script type="application/javascript">
    $(document).ready(function () {

        // DO NOT REMOVE : GLOBAL FUNCTIONS!
        pageSetUp();


    });
</script>

</body>
</html>
