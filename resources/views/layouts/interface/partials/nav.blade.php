<!-- Left panel : Navigation area -->
<!-- Note: This width of the aside area can be adjusted through LESS variables -->
<aside id="left-panel" xmlns:v-on="http://www.w3.org/1999/xhtml">

@if(!\Auth::guest())
    <!-- User info -->
        <div class="login-info">
        <span> <!-- User image size is adjusted inside CSS, it should stay as it -->
            <a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
                <img src="{{ \Auth::user()->avatar }}" alt="ME" class="online"/>

                <span>
                    {{ \Auth::user()->display_name }}
                </span>

                <i class="fa fa-angle-down"></i>
            </a>
        </span>
        </div>
        <!-- end user info -->
@endif

<!-- NAVIGATION : This navigation is also responsive-->
    <nav>
        <ul>
            {{-- TODO: permissions --}}
            {{-- IF SUPERUSER --}}
            {{--<li>
                <a href="#"><i class="fa fa-lg fa-fw fa-unlock"></i> <span class="menu-item-parent">Administration</span></a>
                <ul>
                    <li>
                        <a href="#" @click="currentView = 'botdash'">
                            Bot Dashboard
                        </a>
                    </li>
                </ul>
            </li>--}}
            {{-- END IF --}}

            {{--todo: set class="active" when view is active ??--}}
            <li>
                <a id="dashboard" href="/" title="Dashboard">
                    <i class="fa fa-lg fa-fw fa-home"></i>
                    <span class="menu-item-parent">Dashboard</span>
                </a>
            </li>

            {{--<li>
                <a href="#"><i class="fa fa-lg fa-fw fa-inbox"></i> <span class="menu-item-parent">Inbox</span><span class="badge pull-right inbox-badge">14</span></a>
            </li>--}}

            <li>
                <a href="#">
                    <i class="fa fa-lg fa-fw fa-twitch"></i>
                    <span class="menu-item-parent">Twitch</span>
                </a>
                <ul>
                    <li>
                        <a href="#">
                            Following
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Followers
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Channel Status
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Logs
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-lg fa-fw fa-star"></i>
                    <span class="menu-item-parent">Regulars</span>
                </a>
                <ul>
                    <li>
                        <a href="#" @click.prevent="showAddRegularModal = true">Add New</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="fa fa-lg fa-fw fa-exclamation"></i> <span class="menu-item-parent">Commands</span></a>
                <ul>
                    <li>
                        <a href="#">Built In</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#CommandsModal">Custom Commands</a>
                    </li>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#AddCommandModal">Add New</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="fa fa-lg fa-fw fa-music"></i> <span class="menu-item-parent">Songs</span></a>
                <ul>
                    <li>
                        <a href="#" @click.prevent="showPlaylistModal = true">Playlist</a>
                    </li>
                    <li>
                        <a href="#" @click.prevent="showReqPlaylistModal = true">Requests</a>
                    </li>
                    <li>
                        <a href="#" @click.prevent="showAddSongModal = true">Add Song</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="fa fa-lg fa-fw fa-trophy"></i> <span class="menu-item-parent">Royalties</span></a>
                <ul>
                    <li>
                        <a href="#">Rewards</a>
                    </li>
                    <li>
                        <a href="#">Usage</a>
                    </li>
                    <li>
                        <a href="#">Add New</a>
                    </li>

                </ul>
            </li>

            <li>
                <a id="applications" href="/applications" title="Applications">
                    <i class="fa fa-lg fa-fw fa-cubes"></i>
                    <span class="menu-item-parent">Applications</span>
                </a>
            </li>

        </ul>
    </nav>
    <span class="minifyme" data-action="minifyMenu">
        <i class="fa fa-arrow-circle-left hit"></i>
    </span>
</aside>
<!-- END NAVIGATION -->