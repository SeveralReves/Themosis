<section class="section initial initial--component">
    <div class="initial__component--container">
        @if (isset($title) && !empty($title))
            <h2 class="initial__component--title">{!! $title !!}</h2>
        @endif
        @if (isset($image['url']) && !empty($image['alt']))
            <img alt="{{$image['alt']}}" class="initial__component--image" src="{{ $image['url'] }}">
        @endif
    </div>
</section>
