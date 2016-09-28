<template>
  <div id="app">
    <header class="jumbotron bg-primary">
      <div class="container">
        <h1 class="display-4">SERP Checker</h1>
        <p class="lead">Quickly review your Search Engine Result Snippet.</p>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <section class="col-md-6 preview">
          <h2 class="display-4">Preview</h2>
          <h3><a href="#">{{ title }}</a></h3>
          <span>{{ url }}</span>
          <p>{{ description }}</p>
        </section>
        
        <section class="col-md-4 col-md-offset-2 code">
          <h2 class="display-4">Code</h2>
          <pre><code>&lt;title&gt;{{ title }}&lt;/title&gt;
          <br>&lt;meta name="description" content="{{ description }}"&gt;
          </code></pre>
        </section>
      </div>
    </div>


    <main class="container">
      <form>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label col-form-label-lg">Title</label>
          <div class="col-sm-10">
            <input class="form-control form-control-lg" v-model="title" id="title" placeholder="A Catchy Title" aria-describedby="titleHelpBlock">
            <progress class="progress"
                      :class="{
                      'progress-success': title.length >= 35 && title.length <= 70,
                      'progress-warning': title.length <= 34,
                      'progress-danger': title.length >= 70
                      }"
                      :value="title.length" max="70">
            </progress>
            <p id="titleHelpBlock" class="form-text text-muted">
              You are currently using <strong>{{ title.length }}</strong> of <strong>about 70</strong> recommended characters.
            </p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label col-form-label-lg" for="url">URL</label>
          <div class="col-sm-10">
            <input class="form-control form-control-lg" v-model="url" id="url" placeholder="http://example.org/" aria-describedby="urlHelpBlock">
            <p id="urlHelpBlock" class="form-text text-muted">
              Your Website URL as shown in the Search Engine Result Snippet.
            </p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label col-form-label-lg" for="description">Description</label>
          <div class="col-sm-10">
            <textarea class="form-control form-control-lg" v-model="description" id="description" placeholder="An as pregnant as appealing and informative description." aria-describedby="descriptionHelpBlock"></textarea>
            <progress class="progress" :value="description.length" max="154"></progress>
            <p id="descriptionHelpBlock" class="form-text text-muted">
              You are currently using <strong>{{ description.length }}</strong> of <strong>about 154</strong> recommended characters.
            </p>
          </div>
        </div>
      </form>
    </main>
    
    <footer class="text-muted">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            &copy; Pascale Beier
          </div>
          <nav class="col-sm-6 nav nav-inline text-sm-right">
            <a class="nav-link" href="https://github.com/PascaleBeier/serp-checker/">GitHub</a>
            <a class="nav-link" href="https://twitter.com/PascaleBeier/">Twitter</a>
            <a class="nav-link" href="https://pascalebeier.de/">Website</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'A Catchy Title',
      url: 'http://example.org/',
      description: 'An as pregnant as appealing and informative description.'
    }
  }
}
</script>
