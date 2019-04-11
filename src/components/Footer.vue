<template functional>
  <footer>
    <div
      slot="footer"
      class="fixed-bottom bg-black py-4 text-muted text-center border-top border-danger"
    >
      {{ props.footer }}
    </div>
  </footer>
</template>
