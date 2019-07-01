package com.fjut.oj.mapper;

import com.fjut.oj.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface ChallengeMapper {

    /**
     * 获取全部挑战模块
     * @return ChallengeBlockForUser
     */
    List<ChallengeBlockForUser> queryAllChallengeBlocks();

    /**
     * 根据ID 获取挑战模块的ID,名称，总分值
     * @param blockId
     * @return
     */
    Integer queryChallengeBlockTotalScoreByBlockId(@Param("blockId") Integer blockId);

    /**
     * 根据ID 获取挑战模块的表详情
     * @param blockId
     * @return t_challenge_block
     */
    t_challenge_block queryChallengeBlockByBlockId(@Param("blockId")Integer blockId);


    /**
     * 获取用户显示的挑战模块ID
     * @param username
     * @return
     */
    List<Integer> queryShowedChallengeBlocksByUsername(@Param("username")String username);


    /**
     * 获取全部挑战模块的解锁条件
     * @return
     */
    List<t_challenge_condition> queryAllChallengeConditions();

    /**
     * 获取用户已开放的挑战模块ID
     * @param username
     * @return
     */
    List<Integer> queryChallengeOpenBlocksByUsername(@Param("username")String username);


    /**
     * 根据模块ID 获取挑战模式中某个模块的解锁条件
     * @param blockId
     * @return
     */
    List<ChallengeConditionForBlock> queryChallengeConditionByBlockId(@Param("blockId") Integer blockId);


    /**
     * 根据用户获取挑战模块已完成分数
     * @param username
     * @return
     */
    List<ChallengeBlockForUser> getChallengeBlocksScoredByUsername(@Param("username") String username);

    /**
     * 根据模块ID和起始INDEX获取十个题目信息
     * @param blockId
     * @param startIndex
     * @return
     */
    List<ChallengeProblemForBlock> queryChallengeBlockProblemByBlockId(@Param("blockId") Integer blockId, @Param("startIndex") Integer startIndex);


}
