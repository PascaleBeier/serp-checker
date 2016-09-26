<template>
  <div id="app">
    <header class="jumbotron bg-primary">
      <div class="container">
        <h1>SERP Checker</h1>
        <p class="lead">Quickly review your Search Engine Result Snippet.</p>
      </div>
    </header>

    <section class="preview container">
      <h3><a href="#">{{ title }}</a></h3>
      <span>{{ url }}</span>
      <p>{{ description }}</p>
    </section>


    <main class="container">
      <form>
        <div class="form-group row">
          <label for="title" class="col-xs-2 col-form-label">Title</label>
          <div class="col-xs-10">
            <input class="form-control" v-model="title" id="title" placeholder="http://example.org/" aria-describedby="titleHelpBlock">
            <progress v-show="title" class="progress"
                      :class="{
                      'progress-success': title.length >= 35 && title.length <= 70,
                      'progress-warning': title.length <= 34,
                      'progress-danger': title.length >= 70
                      }"
                      :value="title.length" max="70">
            </progress>
            <p v-show="title" id="titleHelpBlock" class="form-text text-muted">
              You are currently using <strong>{{ title.length }}</strong> of <strong>about 70</strong> recommended characters.
            </p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-xs-2 col-form-label" for="url">URL</label>
          <div class="col-xs-10">
            <input class="form-control" v-model="url" id="url" placeholder="http://example.org/" aria-describedby="urlHelpBlock">
            <p v-show="url" id="urlHelpBlock" class="form-text text-muted">
              Your Website URL as shown in the Search Engine Result Snippet
            </p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-xs-2 col-form-label" for="description">Description</label>
          <div class="col-xs-10">
            <textarea class="form-control" v-model="description" id="description" placeholder="An as pregnant as appealing and informative description." aria-describedby="descriptionHelpBlock"></textarea>
            <progress v-show="description" class="progress" :value="description.length" max="154"></progress>
            <p v-show="title" id="descriptionHelpBlock" class="form-text text-muted">
              You are currently using <strong>{{ description.length }}</strong> of <strong>about 154</strong> recommended characters.
            </p>
          </div>
        </div>
      </form>
    </main>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'A Catchy Title ❤',
      url: 'http://example.org/',
      description: 'An as pregnant as appealing and informative description.',
    }
  }
}
</script>
