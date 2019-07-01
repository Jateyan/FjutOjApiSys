package com.fjut.oj.service;

import com.fjut.oj.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ChallengeService {
    List<ChallengeBlockForUser> queryAllChallengeBlocks();

    Integer queryChallengeBlockTotalScoreByBlockId(Integer blockId);

    t_challenge_block queryChallengeBlockByBlockId(Integer blockId);

    List<Integer> queryShowedChallengeBlocksByUsername(String username);

    List<t_challenge_condition> queryAllChallengeConditions();

    List<Integer> queryChallengeOpenBlocksByUsername(String username);

    List<ChallengeBlockForUser> queryChallengeBlocksScoredByUsername(String username);

    List<ChallengeConditionForBlock> queryChallengeConditionByBlockId(Integer blockId);

    List<ChallengeProblemForBlock> queryChallengeBlockProblemByBlockId(Integer blockId, Integer startIndex);

}
