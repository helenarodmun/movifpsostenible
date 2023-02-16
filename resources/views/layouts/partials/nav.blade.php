<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
	<div class="container-fluid">
	  <a class="navbar-brand" href="/">MoviFP Sostenible</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	 
	  <div class=" collapse navbar-collapse" id="navbarNavDropdown">
	    <ul class="navbar-nav ms-auto ">
			<li class="nav-item">
				<a class="nav-link mx-2 active bi bi-house" aria-current="page" href="/"> {{__('Home')}}</a>
			</li>
			<li class="nav-item">
				
				<a class="nav-link mx-2 bi bi-search" href="#"> {{__('Search')}}</a>
			</li>
			<li class="nav-item">
				<a class="nav-link mx-2 bi bi-car-front" href="#"> {{__('Publish a ride')}}</a>
			</li>
			@guest
				<li class="nav-item">
					<a class="nav-link mx-2 bi bi-door-open" href="{{ route('login') }}"> {{__('Login')}}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link mx-2 bi bi-check-circle" href="{{ route('register') }}"> {{__('Sign up')}}</a>
				</li>	
			@else
			<li class="nav-item dropdown">
				<a class="nav-link mx-2 dropdown-toggle bi bi-person-circle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					{{ Auth::user()->name }}
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				  <li><a class="dropdown-item bi bi-car-front" href="#"> {{__('My rides')}}</a></li>
				  <li><a class="dropdown-item bi bi-chat" href="#"> {{__('Messages')}}</a></li>
				  <li><a class="dropdown-item bi bi-credit-card" href="#"> {{__('Payments')}}</a></li>
				  <li><a class="dropdown-item bi bi-person-circle" href="#"> {{__('Profile')}}</a></li>
				  <li><a class="dropdown-item bi bi-door-closed" href="{{ route('logout') }}"
					onclick="event.preventDefault();
									document.getElementById('logout-form').submit();">
					{{ __('Logout') }}
				</a>

				<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
					@csrf
				</form></li>
				</ul>
			  </li>
				
			@endguest
          
	     
	    </ul>
	  </div>
	</div>
</nav>