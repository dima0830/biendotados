<template>
  <!-- Navbar -->
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full bg-transparent text-white transition-all duration-300 p-4 z-50"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#">
        <img id="logo" src="~/assets/img/logo.png" alt="Logo" class="h-12" />
      </a>

      <!-- Menú Desktop -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:underline">Inicio</a></li>
        <li><a href="#" class="hover:underline">Servicios</a></li>
        <li><a href="#" class="hover:underline">Beneficios</a></li>
        <li><a href="#" class="hover:underline">Contacto</a></li>
      </ul>

      <!-- Botón menú móvil -->
      <button id="menu-btn" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Menú Móvil -->
    <ul
      id="menu"
      class="hidden md:hidden flex flex-col items-center absolute top-full left-0 w-full bg-white text-gray-800 shadow-md py-4 space-y-4"
    >
      <li><a href="#" class="hover:underline">Inicio</a></li>
      <li><a href="#" class="hover:underline">Servicios</a></li>
      <li><a href="#" class="hover:underline">Beneficios</a></li>
      <li><a href="#" class="hover:underline">Contacto</a></li>
    </ul>
  </nav>
</template>
