@extends('layouts.main')
@section('content')
    <!-- Header-->
    @include('layouts.partials.header')

    <!-- Icons Grid-->
    @include('layouts.partials.iconsgrid')

    <!-- Image Showcases-->
    @include('layouts.partials.showcase')

    <!-- Testimonials-->
    @include('layouts.partials.testimonials')

    <!-- Call to Action-->
    @include('layouts.partials.calltoaction')
@endsection