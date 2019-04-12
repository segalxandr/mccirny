<template functional>
  <header>
    <div class="bg-indigo-darker fixed-top navbar navbar-dark navbar-expand">
      <div slot="header" class="d-flex flex-row p-0">
        <div>
          <a href="#">
            <img src="../assets/logoNy.png" />
          </a>
        </div>
        <div class="align-self-center h5 pl-6 text-white">
          {{ props.header }}
        </div>
      </div>
      <!-- <div slot="subheader" class="alert alert-danger">
        {{ props.subheader }}
      </div>-->
    </div>
  </header>
</template>
<script>
export default {};
</script>
