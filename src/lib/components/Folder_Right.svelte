<div class="folder">
  <h2>USEFUL ARTICLES</h2>
  <div class="radius-left-top"></div>
  <div class="radius-right-top"></div>
  <span><i class="fa-solid fa-thumbtack fa-spin"></i>RECENT POST</span>
</div>

<style>
	.folder {
		position: relative;
		background-color: var(--secundair-color);
		border-radius: 25px;
		width: 50%;
		height: 35vw;
    padding: 6rem 0 0 2rem;
	}

  h2 {
    color: var(--text-color);
    font-size: 4rem;
    line-height: 1;
  }

  span {
    color: var(--text-color);
    position: absolute;
    top: 2rem;
  }

  i {
    margin-right: 1rem;
  }

  /* inverted border-radius */
	.folder::before {
		content: '';
		position: absolute;
		background-color: var(--bg-color);
		top: 0;
		right: 0;
		width: 60%;
		height: 60px;
		border-bottom-left-radius: 25px;
		border-top-right-radius: 25px;
    box-shadow: 10px 0 0 0  var(--bg-color);
	}

  .radius-left-top {
    position: absolute;
    top: 0;
    right: 60%;
    width: 30px;
    height: 30px;
    border-top-right-radius: 25px;
    box-shadow: 10px -7px 0 6px  var(--bg-color);
  }

  .radius-right-top {
    position: absolute;
    top: 60px;
    right: 0;
    width: 30px;
    height: 30px;
    border-top-right-radius: 25px;
    box-shadow: 10px -7px 0 6px  var(--bg-color);
  }
</style>



