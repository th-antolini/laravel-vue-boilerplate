<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand pointer" onclick="$router.push('/')">
          <img src="/logo.png" width="30" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" :class="{ 'dropdown': link.dropdown }" v-for="link in links">
              <a class="nav-link pointer" v-if="!link.dropdown" :class="{ 'active': link.path == $route.path, 'disabled': link.disabled }" aria-current="page" onclick="$router.push(link.path)">{{ link.label }}</a>
              <template v-else>
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ link.label }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li v-for="subLink in link.links"><a class="dropdown-item pointer" onclick="$router.push(subLink.path)">{{ subLink.label }}</a></li>
                </ul>
              </template>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container py-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    data: () => ({
      links: [
        {
          path: '/',
          label: 'Dashboard',
          dropdown: false
        }
      ]
    })
  }
</script>
