# jprimer
Node.js-based Client-Server Prime Number Verification

## Goal
A simple client-server prime number tester with TDD in mind

## Requirements
* Quickly verify prime and non-prime numbers for primality
* Fully tested client and server-side APIs for correctness
* Handle concurrent client requests in parallel

## Usage
```
docker-compose -f docker-compose.server.yml up

START=12345678901234567890123456789012345678901234567890 node client.js --COUNT=100000
```

> Note: Command-line switch values can only be so large -> use environment variables if they get too big.

## Code Coverage
```
cd client && jest # -> produces a "coverage" folder
```

## Limits
* The node client process, if unbounded, will make as many promises at once as possible
* Performing a near limitless number of requests (as is made possible through the use of JSBN) at once is a "bad idea," and will exhaust all available client memory quite readily
* Below, you can see an 8GB client machine fall over at roughly 400,000 requests, after an elapsed 38 seconds... without a single request having yet been sent -- something can be done to enable large search regions
```
numWorkers: 436556

<--- Last few GCs --->

[23711:0x3f308b0]    36728 ms: Mark-sweep 1399.3 (1426.2) -> 1399.1 (1426.2) MB, 1189.1 / 0.0 ms  (+ 24.6 ms in 11 steps since start of marking, biggest step 7.4 ms, walltime since start of marking 1224 ms) (average mu = 0.061, current mu = 0.011) allocat

<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x15cfee85be1d]
Security context: 0x3fa98801e6e1 <JSObject>
    1: getColorDepth [0x2ad92af3f239] [internal/tty.js:~70] [pc=0x15cfee86be92](this=0x2ad92af5dbc1 <WriteStream map = 0x14d8c56ceac9>,/* anonymous */=0x065c4e5826f1 <undefined>)
    2: arguments adaptor frame: 0->1
    3: /* anonymous */ [0x11f6f1c70671] [console.js:~189] [pc=0x15cfee86c1ea](this=0x1f720ae8bb39 <Console map = 0x14d8c56d10f1>,args=0x21e9cd7b...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x8dc1c0 node::Abort() [node]
 2: 0x8dc20c  [node]
 3: 0xad60ae v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xad62e4 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xec3972  [node]
 6: 0xec3a78 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [node]
 7: 0xecfb52 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [node]
 8: 0xed0484 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 9: 0xed30f1 v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [node]
10: 0xe9c574 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [node]
11: 0x113beae v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [node]
12: 0x15cfee85be1d 
Aborted
```


## Dependencies
* nvm 0.34.0
* Node.js 10.15.1
* Jest 24.1.0
* docker-ce 18.09+
* docker-compose 1.22+

# References
[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)


[Testing a Node.JS Application Within a Docker Container](https://dzone.com/articles/testing-nodejs-application-using-mocha-and-docker)


[Express Routes: A TDD Approach](https://medium.com/@jodylecompte/express-routes-a-tdd-approach-1e12a0799352)


[Node.js Cluster and Express](https://rowanmanning.com/posts/node-cluster-and-express/)

