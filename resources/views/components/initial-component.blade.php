<section class="section initial initial--component">
    <div class="initial--component__container">
        @if (isset($title) && !empty($title))
            <h2 class="initial--component__title">{!! $title !!}</h2>
        @endif
        @if (isset($image['url']) && !empty($image['alt']))
            <img alt="{{$image['alt']}}" class="initial--component__image" src="{{ $image['url'] }}">
        @endif
    </div>
</section>
