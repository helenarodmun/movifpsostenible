<!DOCTYPE html>
<html lang=""{{ str_replace('_', '-', app()->getLocale()) }}"">
    <head>
        @include('layouts.partials.head')
    </head>
    <body>
        <!-- Navigation-->
        @include('layouts.partials.nav')

        @yield('content')
        
        <!-- Footer-->
        @include('layouts.partials.footer')

        <!-- Bootstrap core JS-->
        @include('layouts.partials.footerscripts')

    </body>
</html>
