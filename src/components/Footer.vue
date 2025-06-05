<template>
  <footer class="bg-gray-100 border-t border-gray-200 py-4 shadow-inner">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-sm font-semibold text-gray-700">
        &copy; {{ new Date().getFullYear() }} <span class="text-indigo-600 font-bold">DummyStore</span>
      </h2>
      <p class="text-xs text-gray-500 mt-1">
        Desenvolvido por <span class="font-medium text-gray-700">Enzo B. Sakatauskas</span>
      </p>

      <div class="mt-2 grid grid-cols-2 sm:flex sm:justify-center gap-2 lg:gap-4">
        <a
          v-for="({ icon, href, target }, index) in socialLinks"
          :key="index"
          :href="href"
          :target="target"
          class="flex items-center justify-center gap-1 px-2 py-1 rounded-lg bg-white border border-gray-300 hover:bg-indigo-100 transition shadow-sm"
        >
          <img
            :src="`/src/assets/images/${icon}.png`"
            :alt="icon"
            class="w-4 h-4"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { icon: 'info', href: '/about', target: '_blank' },
  { icon: 'github', href: 'https://github.com/Plugxhz', target: '_blank' },
  { icon: 'linkedin', href: 'https://br.linkedin.com/in/enzo-bedendo-sakatauskas-1a5228267', target: '_blank' },
  { icon: 'email', href: 'mailto:enzosakatauskas@gmail.com' },
  { icon: 'instagram', href: 'https://www.instagram.com/enzo.saka/', target: '_blank' },
  { icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=5514997479053&text=Ol%C3%A1.', target: '_blank' },
  { icon: 'discord', href: 'https://discord.gg/4a3SznvyYY', target: '_blank' },
]
</script>
