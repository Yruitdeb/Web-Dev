if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    unique_scores = list(set(arr))
    
    max_score = max(unique_scores)
    unique_scores.remove(max_score)
    
    runner_up = max(unique_scores)
    
    print(runner_up)
