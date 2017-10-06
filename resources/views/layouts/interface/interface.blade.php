<!doctype html>
<html lang="{{ app()->getLocale() }}">

@include('layouts.interface.partials.headmeta')

<body class="fixed-header fixed-page-footer smart-style-1">

<div id="app">

    {{-- Header --}}
    @include('layouts.interface.partials.header')

    {{-- Main Navigation --}}
    @include('layouts.interface.partials.nav')

    {{-- Main Panel --}}
    <div id="main" role="main">

        {{-- Ribbon (Breadcrumbs) --}}
        @include('layouts.interface.partials.ribbon')

        {{-- Main Content --}}
        <div id="content">
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

            @yield('content')
        </div>
        {{-- End Main Content --}}

    </div>
    {{-- End Main Panel --}}

    @include('layouts.interface.partials.footer')
    @include('layouts.interface.partials.shortcuts')

    {{-- MODALS --}}
    @if(!Auth::guest())
        <add-song-modal
                :show.sync="showAddSongModal"
                @closed="showAddSongModal = false"
        ></add-song-modal>

        <playlist-modal
                :show.sync="showPlaylistModal"
                @closed="showPlaylistModal = false"
        ></playlist-modal>

        <reqplaylist-modal
                :show.sync="showReqPlaylistModal"
                @closed="showReqPlaylistModal = false"
        ></reqplaylist-modal>

        <add-regular-modal
                :show.sync="showAddRegularModal"
                @closed="showAddRegularModal = false"
        ></add-regular-modal>
    @endif
    {{-- END MODALS --}}
</div>
{{-- END #APP --}}

<!--[if IE 8]>
<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>
<![endif]-->

@include('layouts.interface.partials.javascript')

<script type="application/javascript">
    $(document).ready(function () {

        // DO NOT REMOVE : GLOBAL FUNCTIONS!
        pageSetUp();

    });
</script>

@yield('scripts')

</body>
</html>
