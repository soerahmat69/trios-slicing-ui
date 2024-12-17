<template>
  <header>
    <nav>
      <ul>
        <li id="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="29"
            viewBox="0 0 137 29"
            fill="none"
          >
            <path
              d="M8.17225 8.02069H0V1.21777H25.3429V8.02759H17.1707V27.7816H8.17914V8.02069H8.17225Z"
              fill="#2B3467"
            ></path>
            <path
              d="M30.713 1.21777H47.8355C52.944 1.21777 57.3571 3.78179 57.3571 8.80644C57.3571 11.5566 55.9664 14.4583 52.9853 15.4646C55.4363 16.3193 56.9509 18.773 57.2745 22.0883C57.3984 23.391 57.4398 26.5478 58.2522 27.7816H49.2606C48.8131 26.4444 48.6479 25.0659 48.524 23.6874C48.2761 21.1578 48.0351 18.518 44.4757 18.518H39.6908V27.7816H30.6992V1.21777H30.713ZM39.7045 12.8248H44.4068C46.0798 12.8248 48.3725 12.5629 48.3725 10.1849C48.3725 8.51006 47.3535 7.54511 43.918 7.54511H39.7114V12.8248H39.7045Z"
              fill="#2B3467"
            ></path>
            <path
              d="M71.8494 6.38716H63.7598V1.21777H71.8494V6.38716ZM63.7529 8.4687H71.8426V27.7747H63.7529V8.4687Z"
              fill="#EB455F"
            ></path>
            <path
              d="M91.8774 0.58374C100.745 0.58374 106.673 6.38725 106.673 14.4997C106.673 22.6122 100.745 28.4089 91.8774 28.4089C83.0098 28.4089 77.082 22.6054 77.082 14.4997C77.082 6.39414 83.0098 0.58374 91.8774 0.58374ZM91.8774 21.7851C94.1701 21.7851 97.6813 20.4066 97.6813 14.4929C97.6813 8.57907 94.1701 7.20056 91.8774 7.20056C89.5848 7.20056 86.0736 8.57907 86.0736 14.4929C86.0736 20.4066 89.5917 21.7851 91.8774 21.7851Z"
              fill="#2B3467"
            ></path>
            <path
              d="M119.671 18.8489C119.671 19.5175 119.795 20.1103 120.002 20.5996C120.656 22.1987 122.618 22.5364 124.291 22.5364C125.764 22.5364 128.009 22.0884 128.009 20.1171C128.009 18.7386 126.742 18.3664 121.716 17.0638C117.096 15.8714 111.823 14.7203 111.823 9.36481C111.823 3.22358 117.585 0.58374 123.596 0.58374C129.93 0.58374 135.527 2.78245 135.775 9.25453H127.272C127.437 8.24822 126.948 7.57965 126.212 7.13164C125.475 6.64916 124.456 6.46306 123.554 6.46306C122.329 6.46306 120.325 6.75944 120.325 8.24822C120.491 10.1437 124.656 10.5572 128.787 11.598C132.918 12.6388 137 14.3895 137 19.2625C137 26.1826 130.012 28.4157 123.513 28.4157C120.201 28.4157 110.762 27.3405 110.68 18.8558H119.671V18.8489Z"
              fill="#2B3467"
            ></path>
          </svg>
        </li>
        <li id="menu">
          <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 8H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 16H21"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="hero">
      <div class="overlay_hero"></div>
      <h1 id="hero_text"><span>Trios</span>. Reliable solutions for 30 years</h1>
    </section>

    <section class="container">
      <div class="space-xl">
        <article>
          <p>
            For 30 years, our team has treated every project as if it were our own, with a great
            sense of responsibility. About the result, about your budget and your secrets. We
            realize what your company really needs and ensure that the solution stands like a stone
          </p>
        </article>
        <article>
          <p>
            We combine experience in various sectors and craftsmanship into customized solutions. In
            this, we go further than simply executing; we think along and always keep your interests
            in mind. That is where our strength lies. Trust in solutions that go beyond demand.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="sass">
body
  margin: 0
  padding: 0

  a
    text-decoration: none
  li
    list-style: none

header
  position: fixed
  width: 100vw
  z-index: 9999
  nav

    padding: 2rem

    ul
      display: flex
      justify-content: space-between
      align-items: center
      margin: 0
      padding: 0


      #icon
        font-size: 2.7rem
        letter-spacing: 0.1rem
        font-family: 'PP Neue Montreal Bold'
      #menu
        padding: 10px 13px 10px 13px
        background-color: #2B3467
        border-radius: 10%
      li
        list-style: none

main
  margin: 0
  padding: 0
  width: 100vw
  height: auto

  .container
    width: 100%
    height: auto
    max-width: 1200px
    background-color: #2b3467
  .space-xl
    padding: 5rem

  article
    color: white
    padding: 0px 1rem
    font-family: 'PP Neue Montreal Book'
    font-size: 1.25rem

  #hero
    height: 100vh
    width: 100%
    background-image: url('./assets/Trios_assets/hero_bg.jpg')
    background-repeat: no-repeat
    background-size: cover

    .overlay_hero
      cursor: none
      mix-blend-mode: multiply
      background-color: #2b346799
      width: 100%
      height: 100vh

    #hero_text
      font-family: 'PP Neue Montreal Book'
      font-size: 3.5rem
      color: white
      left: 4%
      bottom: 2%
      position: absolute
      span
        color: red
</style>
