<template>
  <div id="app">
    <header class="jumbotron bg-primary">
      <div class="container">
        <h1>SERP Checker</h1>
        <p class="lead">Quickly review your Search Engine Result Snippet.</p>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <section class="col-md-6 preview">
          <h3><a href="#">{{ title }}</a></h3>
          <span>{{ url }}</span>
          <p>{{ description }}</p>
        </section>
        
        <section class="col-md-6 code">
          <pre><code>&lt;title&gt;{{ title }}&lt;/title&gt;
          <br>&lt;meta name="description" content="{{ description }}"&gt;
          </code></pre>
        </section>
      </div>
    </div>


    <main class="container">
      <form>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input class="form-control" v-model="title" id="title" placeholder="A Catchy Title" aria-describedby="titleHelpBlock">
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
          <label class="col-sm-2 col-form-label" for="url">URL</label>
          <div class="col-sm-10">
            <input class="form-control" v-model="url" id="url" placeholder="http://example.org/" aria-describedby="urlHelpBlock">
            <p id="urlHelpBlock" class="form-text text-muted">
              Your Website URL as shown in the Search Engine Result Snippet.
            </p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label" for="description">Description</label>
          <div class="col-sm-10">
            <textarea class="form-control" v-model="description" id="description" placeholder="An as pregnant as appealing and informative description." aria-describedby="descriptionHelpBlock"></textarea>
            <progress class="progress" :value="description.length" max="154"></progress>
            <p id="descriptionHelpBlock" class="form-text text-muted">
              You are currently using <strong>{{ description.length }}</strong> of <strong>about 154</strong> recommended characters.
            </p>
          </div>
        </div>
      </form>
    </main>
    <a href="https://github.com/PascaleBeier/serp-checker/"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'A Catchy Title',
      url: 'http://example.org/',
      description: 'An as pregnant as appealing and informative description.',
    }
  }
}
</script>
