<!-- Left panel : Navigation area -->
<!-- Note: This width of the aside area can be adjusted through LESS variables -->
<aside id="left-panel" xmlns:v-on="http://www.w3.org/1999/xhtml">

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
                    <i class="fa fa-lg fa-fw fa-twitch">
                        <em v-if="following.online.total > 0">@{{ following.online.total }}</em>
                    </i>
                    <span class="menu-item-parent">Twitch</span>
                </a>
                <ul>
                    <li>
                        <a href="#">
                            Live Now
                            <span class="badge bg-color-red pull-right inbox-badge" v-if="following.online.total > 0">
                                @{{ following.online.total }}
                            </span>
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
                        <a href="/regulars">Manage</a>
                    </li>
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
                        <a href="/commands">Custom Commands</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="fa fa-lg fa-fw fa-music"></i> <span class="menu-item-parent">Playlists</span></a>
                <ul>
                    <li>
                        <a href="/playlists">Manage</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i class="fa fa-lg fa-fw fa-usd"></i> <span class="menu-item-parent">Currency</span></a>
                <ul>
                    <li>
                        <a href="/currency">Manage</a>
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