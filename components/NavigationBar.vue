<template>
<nav class="mt-20 flex flex-wrap items-center justify-between py-5">
    <NuxtLink class='no-highlight text-2xl' to="/">Tiffany Matthé</NuxtLink>
    <div class="w-full md:w-auto md:flex text-left md:text-right mt-5 md:mt-0">
        <NuxtLink to="/about" class="no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item">about</NuxtLink>
        <NuxtLink to="/now" class="no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item">now</NuxtLink>
        <NuxtLink to="/read" class="no-highlight block md:inline-block mx-1 md:mx-3 my-3 pb-1 nav-item">read</NuxtLink>
        <ColorMode />
    </div>
</nav>
</template>
