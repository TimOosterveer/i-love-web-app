<div class="folder">
  <h1>USEFUL ARTICLES</h1>
  <div class="radius-left-top"></div>
  <div class="radius-right-top"></div>
</div>

<style>
	.folder {
		position: relative;
		background-color: var(--secundair-color);
		border-radius: 25px;
		width: 34rem;
		height: 30rem;
    padding: 4rem 2rem 0 0;
	}

  h1 {
    color: var(--text-color);
    font-size: 5rem;
    text-align: right;
  }

  /* inverted border-radius */
	.folder::before {
		content: '';
		position: absolute;
		background-color: var(--bg-color);
		top: 0;
		left: 0;
		width: 40%;
		height: 60px;
		border-bottom-right-radius: 25px;
		border-bottom-right-radius: 25px;
    box-shadow: -10px 0 0 0  var(--bg-color);
	}

  .radius-left-top {
    position: absolute;
    top: 0;
    left: 40%;
    width: 30px;
    height: 30px;
    border-top-left-radius: 25px;
    box-shadow: -10px -7px 0 6px  var(--bg-color);
  }

  .radius-right-top {
    position: absolute;
    top: 60px;
    left: 0;
    width: 30px;
    height: 30px;
    border-top-left-radius: 25px;
    box-shadow: -10px -7px 0 6px  var(--bg-color);
  }
</style>