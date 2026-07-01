cmake_minimum_required(VERSION 3.16)

project(PacketAnalyzer VERSION 1.0)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include(FetchContent)

# Download nlohmann/json automatically
FetchContent_Declare(
    nlohmann_json
    GIT_REPOSITORY https://github.com/nlohmann/json.git
    GIT_TAG v3.11.3
)

FetchContent_MakeAvailable(nlohmann_json)

find_package(Threads REQUIRED)

include_directories(include)

set(SOURCES
    src/main_dpi.cpp
    src/dpi_engine.cpp
    src/connection_tracker.cpp
    src/fast_path.cpp
    src/load_balancer.cpp
    src/packet_parser.cpp
    src/pcap_reader.cpp
    src/rule_manager.cpp
    src/sni_extractor.cpp
    src/types.cpp
    src/FirewallRules.cpp
)

add_executable(dpi_engine ${SOURCES})

target_link_libraries(
    dpi_engine
    PRIVATE
    Threads::Threads
    nlohmann_json::nlohmann_json
)