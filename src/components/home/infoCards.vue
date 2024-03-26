<template>
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                    class="relative flex flex-col min-w-0 break-words  w-full mb-8 ">
                    <div class="px-4 py-5 flex-auto">
                        <div
                            class="text-white bg-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                            <i class="fas fa-award"></i>
                        </div>
                        <h6 class="text-xl font-semibold">{{$t('infoCardTitle1')}}</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            {{$t('infoCardDescription1')}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div
                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                            <i class="fas fa-retweet"></i>
                        </div>
                        <h6 class="text-xl font-semibold">{{$t('infoCardTitle2')}}</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            {{$t('infoCardDescription2')}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div
                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                            <i class="fas fa-fingerprint"></i>
                        </div>
                        <h6 class="text-xl font-semibold">{{$t('infoCardTitle3')}}</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            {{$t('infoCardDescription3')}}
                        </p>
                    </div>
                </div>
            </div>
        </div>




    </div>

</template>