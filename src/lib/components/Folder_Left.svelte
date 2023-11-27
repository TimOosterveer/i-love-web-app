<div class="folder">
  <h1>USEFUL ARTICLES</h1>
  <div class="radius-left-top"></div>
  <div class="radius-right-top"></div>
</div>

<style>
	.folder {
		position: relative;
    border: 1px solid white;
		border-radius: 25px;
		width: 50%;
		height: 35vw;
    padding: 6rem 2rem 0 2rem;
	}

  h1 {
    color: var(--text-color);
    font-size: 6rem;
    text-align: left;
    line-height: 1;
  }

  /* inverted border-radius */
	.folder::before {
		content: '';
		position: absolute;
		background-color: var(--bg-color);
    border: 1px solid white;
    border-top: 0;
    border-left: 0;
		top: 0;
		left: 0;
		width: 60%;
		height: 60px;
		border-bottom-right-radius: 25px;
		border-bottom-right-radius: 25px;
    box-shadow: -10px -2px 0 10px  var(--bg-color);
	}

  .radius-left-top {
    position: absolute;
    top: -1px;
    left: 60%;
    width: 30px;
    height: 30px;
    border-top-left-radius: 25px;
    box-shadow: -10px -7px 0 6px  var(--bg-color);
    border: 1px solid white;
    border-right: 0;
    border-bottom: 0;
  }

  .radius-right-top {
    position: absolute;
    top: 60px;
    left: -1px;
    width: 30px;
    height: 30px;
    border-top-left-radius: 25px;
    box-shadow: -10px -7px 0 6px  var(--bg-color);
    border: 1px solid white;
    border-right: 0;
    border-bottom: 0;
  }
</style>

