<header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="text-center text-white">
                    <!-- Page heading-->
                    <h1 class="mb-5">{{ __('Where do you want to go?') }}</h1>

                    <form class="form-subscribe" id="contactForm">
                        <div class="row">
                            <!-- Departure -->
                            <div class="col" style="flex:1.5 0 0%">
                                <input class="form-control form-control-lg" id="departure" name="departure"
                                    type="text" placeholder="{{ __('Leaving from') }}" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Departure is required.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('Departure is not valid.') }}</div>
                            </div>
                            <!-- Destination -->
                            <div class="col" style="flex:1.5 0 0%">
                                <input class="form-control form-control-lg" id="destination" name="destination"
                                    type="text" placeholder="{{ __('Going to') }}" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Destination is required.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('Destination is not valid.') }}</div>
                            </div>
                            <!-- Date-->
                            <div class="col" style="flex:1 0 0%">
                                <input class="form-control form-control-lg" id="date" name="date"
                                    type="date" />
                                <div class="invalid-feedback text-white">
                                    {{ __('Date is required.') }}</div>
                                <div class="invalid-feedback text-white">
                                    {{ __('Date is not valid.') }}</div>
                            </div>

                            <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton"
                                    type="submit">{{ __('Submit') }}</button></div>

                        </div>

                        <div class="row" style="paddin-bopadding-bottom.5em">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
