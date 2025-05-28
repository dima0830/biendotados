<template>
  <div>
    <MainHero />
    <h1>Esta es mi pagina home</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      praesentium tenetur laboriosam mollitia consequatur fuga odio laborum
      maxime, quia sed facilis ullam, fugit amet eius culpa quo numquam magni
      fugiat.
    </p>

    <!-- Sección de Servicios -->
    <section class="py-12 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800">Construimos Confianza</h2>
        <p class="text-gray-600 mt-2">
          Personas, colegios y empresas que han confiado en nuestra calidad y
          precisión para destacar su identidad.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="p-6 bg-white rounded-lg shadow">
            <h3 class="text-xl font-semibold">📌 Bordados para Dotaciones</h3>
            <p class="text-gray-600">Uniformes, chaquetas, camisas y más.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow">
            <h3 class="text-xl font-semibold">🏫 Bordados para Colegios</h3>
            <p class="text-gray-600">
              Escudos, prendas de promoción y uniformes escolares.
            </p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow">
            <h3 class="text-xl font-semibold">🎁 Bordados Personalizados</h3>
            <p class="text-gray-600">Gorras, accesorios y detalles únicos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Beneficios -->
    <section class="py-12 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border border-gray-300 rounded-xl p-4 bg-white"
        >
          <div
            class="p-6 rounded-xl shadow flex flex-col items-center border border-gray-200 hover:border-gray-400 transition"
          >
            <img
              src="/assets/img/imagen.jpg"
              alt="Tu marca en cada detalle"
              class="w-[52px] h-[52px] mb-4 border border-red-200"
            />
            <h3 class="text-lg font-semibold mb-2">Tu marca en cada detalle</h3>
            <p class="text-gray-600 text-sm text-center">
              Personalización total con logos, nombres y más.
            </p>
          </div>
          <div
            class="p-6 rounded-xl shadow flex flex-col items-center border border-gray-200 hover:border-gray-400 transition"
          >
            <img
              src="/assets/img/iconos/marca.svg"
              alt="Tu marca en cada detalle"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Tu marca en cada detalle</h3>
            <p class="text-gray-600 text-sm text-center">
              Personalización total con logos, nombres y más.
            </p>
          </div>
          <div
            class="p-6 rounded-xl shadow flex flex-col items-center border border-gray-200 hover:border-gray-400 transition"
          >
            <img
              src="/assets/img/iconos/marca.svg"
              alt="Tu marca en cada detalle"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Tu marca en cada detalle</h3>
            <p class="text-gray-600 text-sm text-center">
              Personalización total con logos, nombres y más.
            </p>
          </div>
          <div
            class="p-6 rounded-xl shadow flex flex-col items-center border border-gray-200 hover:border-gray-400 transition"
          >
            <img
              src="/assets/img/iconos/marca.svg"
              alt="Tu marca en cada detalle"
              class="w-16 h-16 mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">Tu marca en cada detalle</h3>
            <p class="text-gray-600 text-sm text-center">
              Personalización total con logos, nombres y más.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  console.log('Home page loaded')
</script>
